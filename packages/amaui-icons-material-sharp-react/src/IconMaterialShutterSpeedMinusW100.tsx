import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialShutterSpeedMinusW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShutterSpeedMinusW100'

      short_name='ShutterSpeedMinus'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M848-212H620v-28h228v28ZM480-440Zm56-40 46 80q-5 5-10 10.5T562-379l-20-35-138 242q30 9 57.5 11t51.5 0q2 7 4 13t5 13q-11 2-21 2.5t-21 .5q-64 0-120-24t-98-66q-42-42-66-98t-24-120q0-64 24-120t66-98q42-42 98-66t120-24q63 0 113 21t95 59l52-52 20 20-52 52q36 44 57 91t23 107q-8-2-14.5-3t-14.5-2q-1-6-1.5-12.5T756-480H536ZM360-840v-28h240v28H360Zm112 332h280q-18-68-62-117t-106-75L472-508Zm-56 40 142-242q-71-20-136.5-4T306-660l110 192Zm-212 68h218L284-642q-45 47-68 109t-12 133Zm172 220 110-192H208q17 66 61.5 116T376-180Z"/>
    </Icon>
  );
});

IconMaterialShutterSpeedMinusW100.displayName = 'AmauiIconMaterialShutterSpeedMinusW100';

export default IconMaterialShutterSpeedMinusW100;
