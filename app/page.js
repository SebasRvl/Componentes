"use client";

import React, { useState, useEffect } from "react";
import { FaWifi, FaBatteryFull } from "react-icons/fa"; // Importamos íconos de WiFi y batería
import { MdAccessTime } from "react-icons/md"; // Ícono de hora

const ScrollViewInteractiveExample = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [comment, setComment] = useState("");
  const [submittedComment, setSubmittedComment] = useState(null);
  const [rating, setRating] = useState(0); // Para almacenar la calificación en estrellas
  const [loading, setLoading] = useState(false); // Estado para manejar el progreso
  const [progress, setProgress] = useState(0); // Estado para el ancho de la barra de progreso
  const [showCast, setShowCast] = useState({}); // Estado para manejar la visibilidad del elenco
  const [battery, setBattery] = useState(100); // Nivel de batería simulado
  const [networkStatus, setNetworkStatus] = useState("WiFi"); // Cambié a "WiFi"
  const [time, setTime] = useState(new Date().toLocaleTimeString()); // Hora actual

  // Actualiza la hora cada segundo
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  // Lista de películas con sus imágenes, títulos, reseñas y elenco
  const movies = [
    {
      title: "Venom",
      image: "https://www.sonypictures.es/statics/DP_4310931_VENOM_2018_2000x3000_LSR_Spanish_Castilian_d8171b6383.jpg",
      review: "Venom es un antihéroe que lucha por controlar sus impulsos y salvar al mundo, mientras enfrenta a un enemigo con poderes similares.",
      cast: [
        { name: "Tom Hardy", image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTv6OAxHjuTqHImlNKWDyEOsGEkAR82hfdgrzEHkcgxPRW1nJIk" },
        { name: "Michelle Williams", image: "https://images.ecestaticos.com/L7GLATUD0U5HPCEsqeG0BvjCC88=/0x0:2272x1515/1200x1200/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F374%2F0df%2F3b7%2F3740df3b7097dd23c728c9e028587c50.jpg" },
        { name: "Riz Ahmed", image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQgJu97E9CUOG_PKMjPUbc-Kw4k8Ww9uJMkCzmlkxjXSThinCRK" }
      ]
    },
    {
      title: "Forrest Gump",
      image: "https://m.media-amazon.com/images/S/pv-target-images/f9ddd832d1b566f5b8dd29a4dbc76b7531c420c8c8d9fdfe94eca128bda8e2b1.jpg",
      review: "La historia de un hombre con un corazón puro que, sin darse cuenta, influye en algunos de los eventos más importantes de la historia de los Estados Unidos.",
      cast: [
        { name: "Tom Hanks", image: "https://hips.hearstapps.com/hmg-prod/images/tom-hanks-670aadbd4bc3b.jpg" },
        { name: "Robin Wright", image: "https://media.gettyimages.com/id/2048555709/es/foto/new-york-new-york-robin-wright-attends-the-damsel-photo-call-at-the-plaza-hotel-on-february-29.jpg?s=612x612&w=gi&k=20&c=k2sJJmRFaj5fvFy6xi45OysR0Opm5uGhJbLRVjUDWoc=" }
      ]
    },
    {
      title: "Guerra Mundial Z",
      image: "https://pics.filmaffinity.com/Guerra_Mundial_Z-473564207-large.jpg",
      review: "Un ex-agente de la ONU viaja alrededor del mundo tratando de encontrar la fuente del brote de zombis y salvar a la humanidad.",
      cast: [
        { name: "Brad Pitt", image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcToUWfqukDU2mm2lp1AHCaIJUsT9nVfLb-T0PwRXa3dBMIXHzlO" },
        { name: "Mireille Enos", image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTPiCzxVV3_EPBLDa8ENM89mqdpH4RihGZQG5KtFyvoteI-sx9f" }
      ]
    },
    {
      title: "Matrix",
      image: "https://pics.filmaffinity.com/Matrix-155050517-large.jpg",
      review: "Un hacker descubre que la realidad que conoce no es más que una simulación creada por máquinas para controlar a los humanos.",
      cast: [
        { name: "Keanu Reeves", image: "https://media.gq.com.mx/photos/5f57d52d4464f9b88fb26729/4:3/w_2664,h_1998,c_limit/Keanu-Reeves.jpg" },
        { name: "Carrie-Anne Moss", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-Nuw5zqBfZVsvWABc9Dr2yVGtjWw4h7IXMRa_0l1hOl4KHjqc" }
      ]
    },
    {
      title: "Gladiator",
      image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgFGVc-ATKU7c15KkhiTNT03jCX7s5mI4oq2CVwhXfPZK1X-c4Y8-HM1X_B27UvOyvgHreITZ0C_hEeS55BksnIuDC5dRIwCqL02cCmYYHPqyVITqMXxbYGYOAQL8EWohrBQ35MAX1rmr3IiIN7phf6trzqsozt1D6ZNJoqw6uYcziLlrT9jRfd7vKcUeY/s1022/Gladiador-2000.jpg",
      review: "Un general romano es traicionado y se convierte en gladiador, buscando venganza contra el emperador corrupto que destruyó su vida.",
      cast: [
        { name: "Russell Crowe", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcqb0N7WYtyJNY2EaTxT4ntaECp2V1WgSsqZar2GKFegUVinOL" },
        { name: "Joaquin Phoenix", image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTH3ltW7KzB07ofoMVLhE1y6eKXYxyDNCXEExKLnx2kvZYNLtoe" }
      ]
    },
    {
      title: "Titanic",
      image: "https://pics.filmaffinity.com/Titanic-321994924-large.jpg",
      review: "Una joven y un joven se enamoran en el transatlántico Titanic, pero su historia de amor se ve truncada por el desastre del naufragio.",
      cast: [
        { name: "Leonardo DiCaprio", image: "https://skrpr.com/wp-content/uploads/2016/10/leonardo-dicaprio-best.jpg" },
        { name: "Kate Winslet", image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSkfaoODn2mBFuxz4WYtmxZZiijYjkUHwbfiHp-TolMf2uVj0w5" }
      ]
    }
  ];

  const handlePress = (movie) => {
    setSelectedItem(movie);
    setComment(""); // Reset comment when selecting a new movie
    setSubmittedComment(null); // Clear previous comment result
    setRating(0); // Reset rating
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleRatingChange = (newRating) => {
    setRating(newRating); // Cambia la calificación según la estrella seleccionada
  };

  const handleSubmitComment = () => {
    if (comment.trim() !== "" && rating > 0) {
      setLoading(true); // Start loading when submitting the comment
      let currentProgress = 0;
      const interval = setInterval(() => {
        currentProgress += 2; // Increment the progress by 10% at a time
        setProgress(currentProgress);
        if (currentProgress >= 100) {
          clearInterval(interval);
          setSubmittedComment(comment);
          setLoading(false); // Stop loading after completion
        }
      }, 200); // Increment every 200ms (this can be adjusted)
    } else {
      alert("Por favor, escribe un comentario y selecciona una calificación.");
    }
  };

  // Función para alternar la visibilidad del elenco de una película
  const toggleCastVisibility = (movieTitle) => {
    setShowCast((prevState) => ({
      ...prevState,
      [movieTitle]: !prevState[movieTitle], // Alterna la visibilidad de la película seleccionada
    }));
  };

  return (
    <div style={styles.container}>
      {/* Barra de estado simulada */}
      <div style={styles.statusBar}>
        <span style={styles.time}><MdAccessTime /> {time}</span>
        <div style={styles.statusRight}>
          <span style={styles.network}><FaWifi /> {networkStatus}</span>
          <div style={styles.batteryContainer}>
            <div style={styles.battery}>
              <FaBatteryFull />
              <span style={styles.batteryLevel}>{battery}%</span>
            </div>
          </div>
        </div>
      </div>

      <h1 style={styles.header}></h1>
      <div style={styles.selectedItemContainer}>
        {selectedItem ? (
          <>
            <p style={styles.selectedText}>Tu Selección: {selectedItem.title}</p>
            <img
              src={selectedItem.image}
              alt={selectedItem.title}
              style={styles.selectedImage}
              onClick={() => alert(selectedItem.review)} // Muestra la reseña al hacer clic en la imagen
            />
            <p style={styles.review}>{selectedItem.review}</p> {/* Mostrar la reseña aquí */}

            {/* Mostrar elenco si se selecciona */}
            <button
              onClick={() => toggleCastVisibility(selectedItem.title)}
              style={styles.button}
            >
              {showCast[selectedItem.title] ? "Ocultar Elenco" : "Mostrar Elenco"}
            </button>

            {showCast[selectedItem.title] && (
              <ul style={styles.castList}>
                {selectedItem.cast.map((actor, index) => (
                  <li key={index} style={styles.castItem}>
                    <img
                      src={actor.image}
                      alt={actor.name}
                      style={styles.castImage}
                    />
                    <p style={styles.castName}>{actor.name}</p>
                  </li>
                ))}
              </ul>
            )}
          </>
        ) : (
          <p style={styles.selectedText}>No Seleccionaste una Película</p>
        )}
      </div>

      <div style={styles.scrollContainer}>
        {movies.map((movie, index) => (
          <div
            key={index}
            style={{
              ...styles.box,
              ...(selectedItem?.title === movie.title ? styles.selectedBox : {}),
            }}
            onClick={() => handlePress(movie)}
          >
            <p style={styles.boxText}>{movie.title}</p>
          </div>
        ))}
      </div>

      {selectedItem && (
        <div style={styles.commentSection}>
          <input
            type="text"
            value={comment}
            onChange={handleCommentChange}
            placeholder="Escribe un comentario sobre la película..."
            style={styles.input}
          />

          {/* Estrellas para la calificación */}
          <div style={styles.starsContainer}>
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                style={{
                  ...styles.star,
                  color: rating >= star ? "#FFD700" : "#ccc", // Color dorado para las estrellas seleccionadas
                }}
                onClick={() => handleRatingChange(star)}
              >
                ★
              </span>
            ))}
          </div>

          <button onClick={handleSubmitComment} style={styles.button}>
            Enviar Comentario
          </button>

          {loading && (
            <div style={styles.progressBar}>
              <div
                style={{
                  ...styles.progress,
                  width: `${progress}%`, // Set the width of the progress based on state
                }}
              />
            </div>
          )}

          {submittedComment && (
            <div style={styles.commentResult}>
              <h3>Comentario sobre {selectedItem.title}:</h3>
              <p>{submittedComment}</p>
              <p>Calificación: {rating} Estrellas</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f5f5f5",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  statusBar: {
    backgroundColor: "green",
    color: "white",
    padding: "10px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  header: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "20px",
    textAlign: "center",
  },
  selectedItemContainer: {
    padding: "10px",
    marginBottom: "10px",
    border: "1px solid #ddd",
    borderRadius: "10px",
    backgroundColor: "#fff",
    textAlign: "center",
  },
  selectedText: {
    fontSize: "18px",
    color: "#333",
    marginBottom: "10px",
  },
  selectedImage: {
    width: "100%",
    maxWidth: "400px",
    borderRadius: "10px",
    cursor: "pointer", // Añadir cursor pointer para indicar que es clickeable
  },
  review: {
    fontSize: "16px",
    color: "#666",
    marginTop: "10px",
    fontStyle: "italic",
  },
  scrollContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    overflowY: "auto",
    maxHeight: "300px",
    padding: "10px",
    border: "1px solid #ddd",
    borderRadius: "10px",
    backgroundColor: "#fff",
  },
  box: {
    padding: "20px",
    backgroundColor: "#4CAF50", // Verde para los elementos
    borderRadius: "10px",
    textAlign: "center",
    color: "#fff",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
  selectedBox: {
    backgroundColor: "#2196F3", // Azul para el elemento seleccionado
  },
  boxText: {
    margin: 0,
    fontSize: "18px",
  },
  commentSection: {
    marginTop: "20px",
    padding: "20px",
    backgroundColor: "#fff",
    borderRadius: "10px",
    border: "1px solid #ddd",
  },
  input: {
    width: "100%",
    padding: "10px",
    borderRadius: "5px",
    marginBottom: "10px",
    border: "1px solid #ddd",
    fontSize: "16px",
  },
  starsContainer: {
    marginBottom: "10px",
    fontSize: "24px",
    cursor: "pointer",
  },
  star: {
    marginRight: "5px",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#4CAF50", // Verde para el botón
    borderRadius: "5px",
    color: "#fff",
    border: "none",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
  commentResult: {
    marginTop: "20px",
    padding: "10px",
    borderTop: "1px solid #ddd",
    backgroundColor: "#e8f5e9", // Fondo verde suave para el comentario
    textAlign: "center",
    color: "#388E3C", // Verde para el texto
  },
  progressBar: {
    width: "100%",
    height: "10px",
    backgroundColor: "#ddd",
    borderRadius: "5px",
    marginTop: "10px",
  },
  progress: {
    height: "100%",
    backgroundColor: "#4CAF50", // Barra verde
    borderRadius: "5px",
    transition: "width 0.2s ease-out", // Animación suave
  },
  castList: {
    listStyleType: "none",
    padding: 0,
    marginTop: "20px",
    textAlign: "left",
    color: "#333",
  },
  castItem: {
    marginBottom: "10px",
  },
  castImage: {
    width: "80px",
    height: "120px",
    objectFit: "cover",
    borderRadius: "5px",
    marginRight: "10px",
  },
  castName: {
    fontSize: "14px",
  },
};

export default ScrollViewInteractiveExample;
