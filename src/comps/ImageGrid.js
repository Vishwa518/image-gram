import React from "react";
import useFirestore from "../hooks/useFirestore";
import { motion } from "framer-motion";
import moment from "moment";

const ImageGrid = ({ setSelectedImg }) => {
  const { docs } = useFirestore("images");

  return (
    <div className="img-grid">
      {docs &&
        docs.map((doc) => (
          <motion.div
            className="img-wrap"
            key={doc.id}
            layout
            whileHover={{ opacity: 1 }}
            s
            onClick={() => setSelectedImg(doc.url)}
          >
            <motion.img
              src={doc.url}
              alt="uploaded pic"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            />

            <motion.text
              style={{
                backgroundColor: "white",
                position: "absolute",
                bottom: "0px",
                flexDirection: "row",
              }}
            >
              <motion.text>Uploaded At: </motion.text>
              {moment(doc?.createdAt?.seconds * 1000).calendar(null, {
                lastDay: "[Yesterday]",
                sameDay: "[Today]",
                lastWeek: "[last] dddd",
                sameElse: "L",
              })}
            </motion.text>
          </motion.div>
        ))}
    </div>
  );
};

export default ImageGrid;
