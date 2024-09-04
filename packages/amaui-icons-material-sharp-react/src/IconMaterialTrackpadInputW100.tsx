import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTrackpadInputW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TrackpadInputW100'

      short_name='TrackpadInput'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M585-132q-19 0-35.5-7T519-160L354-324l33-35 111 24v-292h28v329l-139-34 151 153q10 10 21.5 14.5T585-160h131q44 0 75-31t31-75v-131h28v131q0 56-39 95t-95 39H585Zm21-250v-175h28v175h-28Zm108 0v-115h28v115h-28Zm2 222H538h178Zm-584-92v-536h656v191h-28v-163H160v480h104l28 28H132Z"/>
    </Icon>
  );
});

IconMaterialTrackpadInputW100.displayName = 'AmauiIconMaterialTrackpadInputW100';

export default IconMaterialTrackpadInputW100;
