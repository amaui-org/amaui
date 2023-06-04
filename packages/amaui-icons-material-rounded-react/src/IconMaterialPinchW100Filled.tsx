import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPinchW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PinchW100Filled'

      short_name='Pinch'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2.15 10.6q-.325 0-.537-.213-.213-.212-.213-.537v-3.1q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v2.675L9.425 2.1H6.75q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h3.1q.325 0 .538.212.212.213.212.538v3.1q0 .15-.1.25t-.25.1q-.15 0-.25-.1t-.1-.25V2.575L2.575 9.9H5.25q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm11.525 11.1q-.15 0-.288-.063-.137-.062-.262-.187l-3.8-3.75q-.175-.175-.188-.412-.012-.238.113-.463.1-.175.312-.238.213-.062.413-.012l3.45.675V7.5q0-.5.35-.85t.85-.35q.5 0 .85.35t.35.85v5.3h1.05q.1 0 .187.025.088.025.163.075l3.05 1.5q.725.35 1.037 1.137.313.788.163 1.613l-.7 4q-.05.25-.237.4-.188.15-.463.15Z"/>
    </Icon>
  );
});

IconMaterialPinchW100Filled.displayName = 'AmauiIconMaterialPinchW100Filled';

export default IconMaterialPinchW100Filled;
