import { useCallback } from "react";
import axios from "axios";

import constants from "../constants/apiEndPoint.js";
//Alerts
import Swal from "sweetalert2";
function useApi() {
  const fetchData = useCallback(
    async (method, uri, data) => {
      try {
        if (!method) {
          return;
        }

        if (!uri) {
          return;
        }

        const url = constants.apiEndPoint + uri;
        // const imageSrc = constants.apiEndPoint + '/public/img' + nombreImagen;

        return await axios({
          method,
          url,
          data: data || null,
          // headers: { Authorization: user.token },
        });
      } catch (error) {
        // debugger;
        // console.log('ERROR AQUI WICHU WICHU', error.response);
        // console.log(error);
        if (error.response.status === 403 || error.response.status === 401) {
          
          // console.error('Forbidden');
          return;
        } else if (error.response.status === 400 || error.response.status === 404) {
          Swal.fire({
            icon: "error",
            title: "Error",
            text: error.response.message || "Algo salió mal",
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Algo salió mal!",
          });
        }
        console.error(error);
      }
    },
    []
  );

  return fetchData;
}

export default useApi;
