import
{
  APP_NAME,
  DATE_FORMATS,
  CLOCK_SIZES
} from "../common/constants";

function mySettings(props)
{
  return (
    <Page>
      <Section
        title=
        {
          <Text bold align="center">
            {`${APP_NAME} Settings`}
          </Text>
        }
      >
        <Toggle settingsKey="displaySeconds" label="Display Seconds"/>
        <Toggle settingsKey="displayBattery" label="Display Battery"/>
        <Select
          label="Date Format"
          settingsKey="dateFormat"
          options=
          {
            DATE_FORMATS.map(name => ({name}))
          }
        />
        <Select
          label="Clock Size"
          settingsKey="clockSize"
          options=
          {
            CLOCK_SIZES.map(name => ({name}))
          }
        />
        <Text>UI Color</Text>
        <ColorSelect
          settingsKey="color"
          colors=
          {[
            {color: "magenta"},
            {color: "deepskyblue"},
            {color: "aqua"},
            {color: "aquamarine"},
            {color: "coral"},
            {color: "gold"},
            {color: "hotpink"},
            {color: "thistle"},
            {color: "plum"},
            {color: "lightsalmon"},
            {color: "lightcoral"},
            {color: "indianred"},
            {color: "aliceblue"},
            {color: "#f00"},
            {color: "#0f0"}
          ]}
        />
      </Section>

      <Section>
        <Text>
          To toggle between the following health metrics, simply tap anywhere on your watch!
        </Text>
        <Toggle settingsKey="steps" label="Display Steps"/>
        <Toggle settingsKey="heart" label="Display Heart Rate"/>
        <Toggle settingsKey="cals" label="Display Calories"/>
      </Section>

      <Section>
        <Link source="https://chrisperko.net/support-me">Support Me</Link>
      </Section>

      <Section>
        <Text>Contributors:</Text>
        <Link source="https://www.chrisperko.net">Chris Perko</Link>
        <Link source="https://www.eliotlash.com/">Eliot Lash</Link>
        <Text>Richard Umney</Text>
      </Section>
    </Page>
  );
}

registerSettingsPage(mySettings);
