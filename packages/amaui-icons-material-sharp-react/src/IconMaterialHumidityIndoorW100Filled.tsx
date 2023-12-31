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
      <path d="M480.5-326q55.5 0 94.5-38.5t39-93.314q0-26.576-9.957-50.245Q594.085-531.729 575-550l-95-94-95 94q-19.085 18.271-29.043 41.941Q346-484.39 346-457.814 346-403 385.5-364.5q39.5 38.5 95 38.5ZM374-460q0-20 8.5-38.5t22.897-32.784L480-604l74.603 72.716Q569-517 577.5-498.5 586-480 586-460H374ZM212-212v-402l268-202 268 202v402H212Z"/>
    </Icon>
  );
});

IconMaterialHumidityIndoorW100Filled.displayName = 'AmauiIconMaterialHumidityIndoorW100Filled';

export default IconMaterialHumidityIndoorW100Filled;
