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
            {color: "lightsalmon"},
            {color: "lightcoral"},
            {color: "indianred"},
            {color: 'aliceblue'},
            {color: '#f00'},
            {color: '#0f0'}
          ]}
        />
        <Text>To see the heart rate monitor, simply tap anywhere on your watch screen to toggle between steps and heart rate.</Text>
      </Section>
    </Page>
  );
}

registerSettingsPage(mySettings);
