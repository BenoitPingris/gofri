<template>
  <div class="p-5 space-y-2">
    <div class="space-y-4 bg-gray-100 rounded-lg p-10 shadow-md">
      <div>
        <h2 class="font-bold text-4xl">Buttonss</h2>
        <div class="space-x-4">
          <Button>Primary</Button>
          <Button kind="secondary">Secondary</Button>
          <Button kind="danger">Danger</Button>
          <Button kind="success">Success</Button>
        </div>
      </div>

      <div>
        <h2 class="font-semibold text-xl">Buttons loading</h2>
        <div class="space-x-4">
          <Button loading>Primary</Button>
          <Button loading kind="secondary">Secondary</Button>
          <Button loading kind="danger">Danger</Button>
          <Button loading kind="success">Success</Button>
        </div>
      </div>

      <div>
        <h2 class="font-semibold text-xl">Buttons outline</h2>
        <div class="space-x-4">
          <Button outline>Primary</Button>
          <Button outline kind="secondary">Secondary</Button>
          <Button outline kind="danger">Danger</Button>
          <Button outline kind="success">Success</Button>
        </div>
      </div>

      <div>
        <h2 class="font-semibold text-xl">Buttons sizes</h2>
        <div class="space-x-4">
          <Button size="small">Small</Button>
          <Button>Normal</Button>
          <Button size="large">Large</Button>
        </div>
      </div>

      <div>
        <h2 class="font-semibold text-xl">Buttons with icons</h2>
        <div class="flex space-x-4">
          <Button>
            <template #leading>
              <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                ></path>
              </svg>
            </template>
            Leading
          </Button>
          <Button>
            <template #trailing>
              <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                ></path>
              </svg>
            </template>
            Trailing
          </Button>
        </div>
      </div>
    </div>

    <div class="space-y-4 bg-gray-100 rounded-lg p-10 shadow-md">
      <h2 class="font-bold text-4xl">Inputs</h2>
      <div class="space-y-2">
        <div class="space-y-4">
          <Input placeholder="Placeholder" />
          <Input label="Label" placeholder="Placeholder" />
          <Input
            label="Input with an error"
            error="There's an error"
            placeholder="Placeholder"
          />
        </div>
      </div>
    </div>

    <div class="space-y-4 bg-gray-100 rounded-lg p-10 shadow-md">
      <h2 class="font-bold text-4xl">Cards</h2>
      <Card title="Card title">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae nihil
        veniam error iure odio animi? Quas ab voluptatem officiis cupiditate
        nostrum asperiores! Suscipit, ad temporibus error libero necessitatibus
        alias praesentium.
        <template #actions>
          <Button outline>Bruh</Button>
          <Button kind="danger">Bruh</Button>
        </template>
      </Card>
    </div>

    <div class="space-y-4 bg-gray-100 rounded-lg p-10 shadow-md">
      <h2 class="font-bold text-4xl">Alerts</h2>
      <Alert>
        <template #icon>
          <svg
            class="w-10 h-10"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
        </template>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae nihil
        veniam error iure odio animi? Quas ab voluptatem officiis cupiditate
        nostrum asperiores! Suscipit, ad temporibus error libero necessitatibus
        alias praesentium.
      </Alert>
      <Alert kind="danger">
        <template #icon>
          <svg
            class="w-10 h-10"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
            ></path>
          </svg>
        </template>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae nihil
        veniam error iure odio animi? Quas ab voluptatem officiis cupiditate
        nostrum asperiores! Suscipit, ad temporibus error libero necessitatibus
        alias praesentium.
      </Alert>
      <Alert kind="success">
        <template #icon>
          <svg
            class="w-10 h-10"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 13l4 4L19 7"
            ></path>
          </svg>
        </template>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae nihil
        veniam error iure odio animi? Quas ab voluptatem officiis cupiditate
        nostrum asperiores! Suscipit, ad temporibus error libero necessitatibus
        alias praesentium.
      </Alert>
    </div>

    <div class="space-y-4 bg-gray-100 rounded-lg p-10 shadow-md">
      <h2 class="font-bold text-4xl">Notifications</h2>
      <Notification
        title="Information notification!"
        content="Nothing really important, just an information"
      />
      <Notification
        kind="danger"
        title="Something bad happened!"
        content="Oops, it seems your bank account has been closed"
      />
      <Notification
        kind="success"
        title="Successfully Saved!"
        content="Anyone with a link can now view this file"
      />
    </div>
  </div>
</template>

<script>
export default {
  head: {},
}
</script>

<style>
</style>
