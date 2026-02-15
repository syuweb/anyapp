"use client";

import { Card, CardBody, CardHeader, Button, Input } from "@nextui-org/react";
import { useState } from "react";

export default function Page() {
  const [name, setName] = useState("");

  return (
    <div style={{ padding: "40px", maxWidth: "400px" }}>
      <Card>
        <CardHeader>NextUI サンプル</CardHeader>
        <CardBody style={{ display: "flex", gap: "12px", flexDirection: "column" }}>
          <Input
            label="名前"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Button color="primary" onPress={() => alert(`こんにちは ${name}`)}>
            挨拶する
          </Button>
        </CardBody>
      </Card>
    </div>
  );
}
