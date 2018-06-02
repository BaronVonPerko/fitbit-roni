function mySettings(props) {
  return (
    <Page>
      <Section
        title={<Text bold align="center">Roni Settings</Text>}>
        <ColorSelect
          settingsKey="color"
          colors={[
            {color: "magenta"},
            {color: "deepskyblue"}
          ]}
        />
      </Section>
    </Page>
  );
}

registerSettingsPage(mySettings);
