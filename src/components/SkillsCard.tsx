import { Card, CardContent, Typography } from "@mui/material";

type Props = {
  title: string;
  skills: string[];
};

export default function SkillsCard({ title, skills }: Props) {
  return (
    <Card sx={{ height: "100%" }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <Typography color="gray">
          {skills.join(" • ")}
        </Typography>
      </CardContent>
    </Card>
  );
}
