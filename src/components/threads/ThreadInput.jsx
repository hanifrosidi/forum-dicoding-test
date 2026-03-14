import useInput from "@/hooks/userInput";
import { Button, FormControl, TextField } from "@mui/material";

export function ThreadInput({ addThread }) {
  const [title, onTitleChange] = useInput("");
  const [category, onCategoryChange] = useInput("");
  const [body, onBodyChange] = useInput("");

  return (
    <FormControl sx={{ ml: 2, mt: 1, mb: 5 }}>
      <TextField
        label="Judul"
        sx={{ mb: 2 }}
        size="small"
        value={title}
        onChange={onTitleChange}
      />
      <TextField
        label="Kategori"
        sx={{ mb: 2 }}
        size="small"
        value={category}
        onChange={onCategoryChange}
      />
      <TextField
        multiline
        maxRows={4}
        sx={{ width: 1120 }}
        label="Masukkan Ide Kamu"
        value={body}
        onChange={onBodyChange}
      />
      <Button
        variant="contained"
        sx={{ mt: 3, backgroundColor: "#009d88" }}
        onClick={() => addThread({ title, body, category })}
      >
        Kirim
      </Button>
    </FormControl>
  );
}
