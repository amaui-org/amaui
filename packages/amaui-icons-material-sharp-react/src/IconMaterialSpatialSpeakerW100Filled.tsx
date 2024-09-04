import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSpatialSpeakerW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SpatialSpeakerW100Filled'

      short_name='SpatialSpeaker'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M354-132q-108 0-185-73.5T92-386h28q0 95 68.25 160.5T354-160v28Zm0-128q-55 0-94.5-36T220-386h28q0 42 31.5 70t74.5 28v28Zm-8-116v-412h268v412H346Zm260 116v-28q43 0 74.5-28t31.5-70h28q0 54-39.5 90T606-260Zm0 128v-28q97.5 0 165.75-65.5T840-386h28q0 107-77 180.5T606-132Z"/>
    </Icon>
  );
});

IconMaterialSpatialSpeakerW100Filled.displayName = 'AmauiIconMaterialSpatialSpeakerW100Filled';

export default IconMaterialSpatialSpeakerW100Filled;
