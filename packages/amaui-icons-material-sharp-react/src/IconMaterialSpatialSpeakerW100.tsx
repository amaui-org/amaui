import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSpatialSpeakerW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SpatialSpeakerW100'

      short_name='SpatialSpeaker'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M354-132q-108 0-185-73.5T92-386h28q0 95 68.25 160.5T354-160v28Zm0-128q-55 0-94.5-36T220-386h28q0 42 31.5 70t74.5 28v28Zm-8-116v-412h268v412H346Zm28-28h212v-356H374v356Zm232 144v-28q43 0 74.5-28t31.5-70h28q0 54-39.5 90T606-260Zm0 128v-28q97.5 0 165.75-65.5T840-386h28q0 107-77 180.5T606-132ZM374-404h212-212Z"/>
    </Icon>
  );
});

IconMaterialSpatialSpeakerW100.displayName = 'AmauiIconMaterialSpatialSpeakerW100';

export default IconMaterialSpatialSpeakerW100;
