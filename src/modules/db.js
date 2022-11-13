export async function insertOrder(payload) {
  const key =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh6cHhuaGFqdnpnbmpjemJyYW1wIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgxNjQ2MzgsImV4cCI6MTk4Mzc0MDYzOH0.rjVniPxUs5ZxxbmHY22Hn6-hPRdE2xG_vhLtLGShTQs";
  const url = "https://hzpxnhajvzgnjczbramp.supabase.co";
  const res = await fetch(url + "/rest/v1/simple-shop", {
    method: "POST",
    headers: {
      apikey:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh6cHhuaGFqdnpnbmpjemJyYW1wIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgxNjQ2MzgsImV4cCI6MTk4Mzc0MDYzOH0.rjVniPxUs5ZxxbmHY22Hn6-hPRdE2xG_vhLtLGShTQs",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh6cHhuaGFqdnpnbmpjemJyYW1wIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgxNjQ2MzgsImV4cCI6MTk4Mzc0MDYzOH0.rjVniPxUs5ZxxbmHY22Hn6-hPRdE2xG_vhLtLGShTQs",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
  return await res.json();
}

/*
const options = {
  method: 'POST',
  headers: {
    apikey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh6cHhuaGFqdnpnbmpjemJyYW1wIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgxNjQ2MzgsImV4cCI6MTk4Mzc0MDYzOH0.rjVniPxUs5ZxxbmHY22Hn6-hPRdE2xG_vhLtLGShTQs',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh6cHhuaGFqdnpnbmpjemJyYW1wIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgxNjQ2MzgsImV4cCI6MTk4Mzc0MDYzOH0.rjVniPxUs5ZxxbmHY22Hn6-hPRdE2xG_vhLtLGShTQs',
    'Content-Type': 'application/json'
  },
  body: '{"name":"Aml","email":"aml@kea.dk","adress":"Guldbergsgade"}'
};

fetch('https://hzpxnhajvzgnjczbramp.supabase.co/rest/v1/simple-shop', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err)); */
