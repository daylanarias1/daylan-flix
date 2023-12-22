const BASE_URL = 'https://daylan-flixx-i9ggfskw9-daylans-projects.vercel.app';

export async function obtenerCategorias() {
    const response = await fetch(`${BASE_URL}/categorias`);
    const data = await response.json();
    return data;
}

export async function obtenerVideos() {
    const response = await fetch(`${BASE_URL}/videos`);
    const data = await response.json();
    return data;
}

export async function registrarCategoria(categoria) {
    console.log(categoria)
    const response = await fetch(`${BASE_URL}/categorias`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(categoria),
    });
    const data = await response.json();
    return data;
}

export async function eliminarCategoriaPorId(idCategoria) {
    try {
        const response = await fetch(`${BASE_URL}/categorias/${idCategoria}`, {
            method: 'DELETE',
        });

        if (response.status === 204) {
            return true;
        } else {
            const data = await response.json();
            throw new Error(data.message || 'No se pudo eliminar la categoría.');
        }
    } catch (error) {
        console.error('Error al eliminar la categoría:', error);
        return false;
    }
}

export async function registrarVideo(video) {
    try {
        const response = await fetch(`${BASE_URL}/videos`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(video),
        });

        if (!response.ok) {
            throw new Error('Error al registrar el video');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error en la solicitud de registro de video:', error);
        throw error;
    }
}