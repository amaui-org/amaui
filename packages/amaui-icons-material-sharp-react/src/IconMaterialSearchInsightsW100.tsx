import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSearchInsightsW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SearchInsightsW100'

      short_name='SearchInsights'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M400-318q100 0 170-70.29T640-559q0-100.42-70-170.71T400-800q-100 0-170 70.29T160-559q0 100.42 70 170.71T400-318Zm-14-143v-226h28v226h-28Zm-132 0v-151h28v151h-28Zm264 0v-113h28v113h-28Zm291 329L580-361q-36 32-82.15 50.5Q451.69-292 400-292q-112.23 0-190.11-77.84-77.89-77.84-77.89-190T209.84-750q77.84-78 190-78T590-750.11q78 77.89 78 190.11 0 51.69-18.5 97.85Q631-416 599-381l229 229-19 20Z"/>
    </Icon>
  );
});

IconMaterialSearchInsightsW100.displayName = 'AmauiIconMaterialSearchInsightsW100';

export default IconMaterialSearchInsightsW100;
