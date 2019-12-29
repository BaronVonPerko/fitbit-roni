import { APP_NAME, DATE_FORMATS } from "../common/constants";

function mySettings(props) {
  return (
    <Page>
      <Section
        title={
          <Text bold align="center">
            {`${APP_NAME} Settings`}
          </Text>
        }
      >
        <Toggle settingsKey="displaySeconds" label="Display Seconds" />
        <Toggle settingsKey="displayBattery" label="Display Battery" />
        <Select
          label="Date Format"
          settingsKey="dateFormat"
          options={DATE_FORMATS.map(name => ({ name }))}
        />
        <Text>UI Color</Text>
        <ColorSelect
          settingsKey="color"
          colors={[
            { color: "magenta" },
            { color: "deepskyblue" },
            { color: "aqua" },
            { color: "aquamarine" },
            { color: "coral" },
            { color: "gold" },
            { color: "hotpink" },
            { color: "thistle" },
            { color: "plum" },
            { color: "lightsalmon" },
            { color: "lightcoral" },
            { color: "indianred" },
            { color: "aliceblue" },
            { color: "#f00" },
            { color: "#0f0" }
          ]}
        />
        <Text>
          To see the heart rate monitor, simply tap anywhere on your watch
          screen to toggle between steps and heart rate.
        </Text>
      </Section>
      <Section>
        <Link source="https://chrisperko.net/support-me">Support Me</Link>
      </Section>
      <Section>
        <Text>Contributors:</Text>
        <Link source="https://www.chrisperko.net">Chris Perko</Link>
        <Link source="https://www.eliotlash.com/">Eliot Lash</Link>
      </Section>
    </Page>
  );
}

registerSettingsPage(mySettings);
