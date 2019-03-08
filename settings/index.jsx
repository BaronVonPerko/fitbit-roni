import { APP_NAME, DATE_FORMATS } from '../common/constants';

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
        <Toggle
          settingsKey="displaySeconds"
          label="Display Seconds"
        />
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
        <Text>{`${APP_NAME} was developed by Eliot Lash. It is a modification of the Roni watch face developed by Chris Perko.`}</Text>
        <Text>{`If you are enjoying ${APP_NAME} and would like to show your support financially, you may either donate to
        Chris via the link below, or to a charity of your choice such as the EFF, Oxfam, or CarbonFund. Thank you!`}</Text>
        <Text>{`If you are having issues with ${APP_NAME} please open an issue on the GitHub project or e-mail Eliot.
        As I am provding this app for free I am not able to guarantee I will be able to help, but I will try if I have time.`}</Text>
        <Link source="https://github.com/fadookie/fitbit-roni">
          {`${APP_NAME} source code and issue tracker`}
        </Link>
        <Link source="mailto:fadookie@gmail.com">
          E-mail Eliot
        </Link>
        <Link source="https://www.eliotlash.com/">
          Eliot Lash's website
        </Link>
        <Link source="https://chrisperko.net/support-me">
          Chris Perko's website
        </Link>
      </Section>
    </Page>
  );
}

registerSettingsPage(mySettings);
