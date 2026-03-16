import Alert from "../components/storybook/Alert";

const stories = {
  title: "Alert",
  component: Alert,
  tags: ["autodocs"],
  argTypes: {
    name: {
      control: "text",
      description: "The name of the alert",
      table: {
        type: { summary: "string" },
      },
    },
    type: {
      control: { type: "radio" },
      options: ["success", "fail", "warning"],
      description: "Type of alert",
      table: {
        type: { summary: '"success" | "fail" | "warning"' },
      },
    },
    description: {
      control: "text",
      description: "The description of alert",
      table: {
        type: { summary: "string" },
      },
    },
  },
};

const TemplateStory = (args) => <Alert {...args} />;

const WithTypeSuccess = TemplateStory.bind({});

WithTypeSuccess.args = {
  name: "Berhasil",
  type: "success",
  description: "Berhasil Menambah Stories",
  onClick: () => {
    alert("Aku diclick");
  },
};

const WithTypeFail = TemplateStory.bind({});

WithTypeFail.args = {
  name: "Gagal",
  type: "fail",
  description: "Gagal Menambah Stories",
  onClick: () => {
    alert("Aku diclick");
  },
};

const WithTypeWarning = TemplateStory.bind({});

WithTypeWarning.args = {
  name: "Warning",
  type: "warning",
  description: "Peringatan Pada system anda",
  onClick: () => {
    alert("Aku diclick");
  },
};

export default stories;
export { WithTypeSuccess, WithTypeFail, WithTypeWarning };
