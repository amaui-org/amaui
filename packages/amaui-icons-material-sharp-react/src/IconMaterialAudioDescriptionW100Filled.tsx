import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAudioDescriptionW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AudioDescriptionW100Filled'

      short_name='AudioDescription'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M104-346v-254l14-14h158l14 14v254h-28v-80H132v80h-28Zm28-108h130v-132H132v132Zm258 108v-268h174l14 14v240l-14 14H390Zm28-28h132v-212H418v212Zm280-33-20-20q11-10.556 16.5-23.99t5.5-28.788q0-16.313-5.5-29.267Q689-522 678-533l20-21q14.348 14.3 22.174 33.15Q728-502 728-480t-7.826 40.399Q712.348-421.203 698-407Zm90 92-20-22q27.887-27.759 43.944-64.35Q828-437.941 828-480q0-42-16.056-78.496Q795.887-594.992 768-623l20-22q32.172 32.096 50.086 74.404T856-480.144q0 48.144-17.914 90.455Q820.172-347.377 788-315Z"/>
    </Icon>
  );
});

IconMaterialAudioDescriptionW100Filled.displayName = 'AmauiIconMaterialAudioDescriptionW100Filled';

export default IconMaterialAudioDescriptionW100Filled;
