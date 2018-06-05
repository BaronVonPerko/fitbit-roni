function mySettings(props) {
  return (
    <Page>
      <Section
        title={<Text bold align="center">Roni Settings</Text>}>
        <ColorSelect
          settingsKey="color"
          colors={[
            {color: "magenta"},
            {color: "deepskyblue"},
            {color: "aqua"},
            {color: "aquamarine"},
            {color: "coral"},
            {color: "gold"},
            {color: "hotpink"},
            {color: "thistle"},
            {color: "plum"},
          ]}
        />
      </Section>
    </Page>
  );
}

registerSettingsPage(mySettings);
