export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const response = await fetch(
    "https://integrate.api.nvidia.com/v1/chat/completions",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + process.env.REACT_APP_NVIDIA_KEY,
      },
      body: JSON.stringify(req.body),
    },
  );

  const data = await response.json();
  res.status(200).json(data);
}
