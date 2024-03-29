import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSentimentSadFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SentimentSadFilled'

      short_name='SentimentSad'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M250 736h60v-10q0-71 49.5-120.5T480 556q71 0 120.5 49.5T650 726v10h60v-10q0-96-67-163t-163-67q-96 0-163 67t-67 163v10Zm34-270q41-6 86.5-32t72.5-59l-46-38q-20 24-55.5 44T276 406l8 60Zm392 0 8-60q-30-5-65.5-25T563 337l-46 38q27 33 72.5 59t86.5 32ZM480 976q-83 0-156-31.5T197 859q-54-54-85.5-127T80 576q0-83 31.5-156T197 293q54-54 127-85.5T480 176q83 0 156 31.5T763 293q54 54 85.5 127T880 576q0 83-31.5 156T763 859q-54 54-127 85.5T480 976Z"/>
    </Icon>
  );
});

IconMaterialSentimentSadFilled.displayName = 'AmauiIconMaterialSentimentSadFilled';

export default IconMaterialSentimentSadFilled;
