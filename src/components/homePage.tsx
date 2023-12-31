"use client";
import { Button, Group, MantineProvider, Space, Textarea } from "@mantine/core";
import { useRouter } from "next/navigation";
import { useForm } from "@mantine/form";
import Image from "next/image";
import styles from "../../styles/header.css";
import ninja from "/public/Ninjas/NinjaHero2.gif";

export default function HomeComponent() {
  const router = useRouter();

  const handleClick = (formValues, href) => {
    if (formValues.name.length > 0) {
      setName(formValues.name);
      router.push(href);
    }
  };

  const formValues = useForm({
    initialValues: {
      name: "",
      // date: "",
    },
    validate: {
      name: (value) => {
        value.length <= 0 ? "Name Required" : null;
      },
    },
  });
  return (
    <MantineProvider>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div
          className="cn__header section__padding"
          id="home"
        >
          <div className="cn__header-content">
            <h1 className={styles.h1}>Welcome to Progress Tracking</h1>
            <p className={styles.p}>See your childs progress in Impact</p>
            <div className="cn__header-content__input">
              <form onSubmit={formValues.onSubmit((values) => (formValues.setValues(values), formValues.validate()))}>
                <Textarea
                  label="Ninja's Name"
                  placeholder="John.Smith"
                  withAsterisk
                  {...formValues.getInputProps("name")}
                />
                <Space h={"8vh"} />
                <Group position="center">
                  <Button
                    className="submitButton"
                    type="submit"
                    variant="outline"
                    onClick={() => handleClick(formValues.values, `/pages/card/?ninjaName=${formValues.values.name}`)}
                  >
                    Submit
                  </Button>
                </Group>
              </form>
            </div>
          </div>
          <div className="cn__header-image">
            <Image
              src={ninja}
              alt="ninja"
            />
          </div>
        </div>
      </main>
    </MantineProvider>
  );
}
