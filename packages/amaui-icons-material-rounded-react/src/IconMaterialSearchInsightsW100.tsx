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
      <path d="M400-318q100 0 170-70.29T640-559q0-100.42-70-170.71T400-800q-100 0-170 70.29T160-559q0 100.42 70 170.71T400-318Zm-.04-143q-5.96 0-9.96-4.02-4-4.03-4-9.98v-198q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v198q0 5.95-4.04 9.98-4.03 4.02-10 4.02Zm-132 0q-5.96 0-9.96-4.02-4-4.03-4-9.98v-123q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v123q0 5.95-4.04 9.98-4.03 4.02-10 4.02Zm264 0q-5.96 0-9.96-4.02-4-4.03-4-9.98v-85q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v85q0 5.95-4.04 9.98-4.03 4.02-10 4.02ZM400-292q-112.23 0-190.11-77.84-77.89-77.84-77.89-190T209.84-750q77.84-78 190-78T590-750.11q78 77.89 78 190.11 0 51.69-18.5 97.85Q631-416 599-381l220 220q4 3.67 4 9.33 0 5.67-4 10.17t-10 4q-6-.5-10-4.5L580-361q-36 32-82.15 50.5Q451.69-292 400-292Z"/>
    </Icon>
  );
});

IconMaterialSearchInsightsW100.displayName = 'AmauiIconMaterialSearchInsightsW100';

export default IconMaterialSearchInsightsW100;
