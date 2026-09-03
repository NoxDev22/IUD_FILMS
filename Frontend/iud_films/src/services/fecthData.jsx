export async function fetchData({
  endpoint,
  filters = {},
  page = 1,
  id,
  limit = 8,
  method = "GET",
  headers = {},
  body = null,
}) {
  try {
    const offset = (page - 1) * limit;
    const queryParams = new URLSearchParams({ offset, limit });

    Object.keys(filters).forEach((key) => {
      if (filters[key]) {
        queryParams.append(key, filters[key]);
      }
    });

    const queryString = queryParams.toString();
    const url = `http://localhost:5100/${endpoint}/${id ? id : ""}${queryString ? `?${queryString}` : ""}`;

    // Configuración de las opciones del fetch
    const options = {
      method: method.toUpperCase(),
      headers: {
        "Content-Type": "application/json",
        ...headers, // Permite sobrescribir o añadir nuevos headers
      },
    };

    // Si el método no es GET ni HEAD y existe un body, se convierte a JSON
    if (body && !["GET", "HEAD"].includes(options.method)) {
      options.body = typeof body === "string" ? body : JSON.stringify(body);
    }

    const response = await fetch(url, options);
    if (!response.ok) throw new Error("Error en la operación de los datos");

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Fetch error:", error);
    return { data: [], total: 0, totalPages: 1 };
  }
}
