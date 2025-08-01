import type { Meta, StoryObj } from "@storybook/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { BuildxMediaCard } from ".";

const queryClient = new QueryClient();

const withQueryClient = (Story: React.ComponentType) => (
  <QueryClientProvider client={queryClient}>
    <Story />
  </QueryClientProvider>
);

const meta: Meta<typeof BuildxMediaCard> = {
  title: "Components/MediaCard",
  component: BuildxMediaCard,
  decorators: [withQueryClient],
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    component: {
      control: "select",
      options: ["img", "video", "audio", "auto"],
      defaultValue: "img",
    },
    disabledCache: {
      control: "boolean",
      defaultValue: false,
    },
    disablePlaceholder: {
      control: "boolean",
      defaultValue: false,
    },
    isLoadingImage: {
      control: "boolean",
      defaultValue: false,
    },
    cursorPointer: {
      control: "boolean",
      defaultValue: false,
    },
    "sx.objectFit": {
      control: "select",
      options: ["contain", "cover", "fill", "none", "scale-down"],
      defaultValue: "cover",
    },
  },
};

export default meta;
type Story = StoryObj<typeof BuildxMediaCard>;

export const DefaultImage: Story = {
  args: {
    src: "https://picsum.photos/300/200",
    component: "img",
    sx: { width: 300, height: 200 },
    "sx.objectFit": "cover",
  },
};

export const WithPlaceholder: Story = {
  args: {
    src: "https://picsum.photos/300/200",
    defaultValue: "https://picsum.photos/300/200",
    component: "img",
    sx: { width: 300, height: 200 },
    "sx.objectFit": "cover",
  },
};

export const Video: Story = {
  args: {
    src: "https://www.w3schools.com/html/mov_bbb.mp4",
    component: "video",
    sx: { width: 300, height: 200 },
    "sx.objectFit": "cover",
    controls: true,
  },
};

export const Audio: Story = {
  args: {
    src: "https://www.w3schools.com/html/horse.mp3",
    component: "audio",
    sx: { width: 300, height: 50 },
    controls: true,
  },
};

export const WithCursor: Story = {
  args: {
    src: "https://picsum.photos/300/200?blur",
    component: "img",
    cursorPointer: true,
    sx: { width: 300, height: 200 },
    "sx.objectFit": "cover",
  },
};

export const ContainFit: Story = {
  args: {
    src: "https://picsum.photos/300/200?random=1",
    component: "img",
    sx: { width: 300, height: 200, backgroundColor: "#f0f0f0" },
    "sx.objectFit": "contain",
  },
};
