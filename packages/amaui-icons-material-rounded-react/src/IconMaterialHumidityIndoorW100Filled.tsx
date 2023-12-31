import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHumidityIndoorW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HumidityIndoorW100Filled'

      short_name='HumidityIndoor'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480.5-326q55.5 0 94.5-38.5t39-93.314q0-26.576-9.957-50.245Q594.085-531.729 575-550l-74-73q-9-8-21-8t-21 8l-74 73q-19.085 18.271-29.043 41.941Q346-484.39 346-457.814 346-403 385.5-364.5q39.5 38.5 95 38.5ZM374-460q0-20 8.5-38.5t22.897-32.784L480-604l74.603 72.716Q569-517 577.5-498.5 586-480 586-460H374ZM272-212q-24.75 0-42.375-17.625T212-272v-312q0-14.25 6.375-27T236-632l208-157q15.68-12 35.84-12Q500-801 516-789l208 157q11.25 8.25 17.625 21T748-584v312q0 24.75-17.625 42.375T688-212H272Z"/>
    </Icon>
  );
});

IconMaterialHumidityIndoorW100Filled.displayName = 'AmauiIconMaterialHumidityIndoorW100Filled';

export default IconMaterialHumidityIndoorW100Filled;
