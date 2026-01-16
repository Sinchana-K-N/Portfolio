import { Card, CardContent, Typography } from "@mui/material";

interface Props {
  role: string;
  company: string;
  description: string;
}

export default function ExperienceCard({ role, company, description }: Props) {
  return (
    <Card elevation={3} sx={{ mb: 3 }}>
      <CardContent>
        <Typography fontWeight={700} color="primary">
          {role} – {company}
        </Typography>
        <Typography mt={1}>{description}</Typography>
      </CardContent>
    </Card>
  );
}
