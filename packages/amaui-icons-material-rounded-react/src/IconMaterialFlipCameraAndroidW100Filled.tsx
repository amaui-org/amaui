import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFlipCameraAndroidW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlipCameraAndroidW100Filled'

      short_name='FlipCameraAndroid'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 13.7q-.725 0-1.212-.488Q10.3 12.725 10.3 12t.488-1.213Q11.275 10.3 12 10.3t1.213.487q.487.488.487 1.213 0 .725-.487 1.212-.488.488-1.213.488ZM3.4 9.35q-.325 0-.537-.213-.213-.212-.213-.537V5q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v3.15Q4.7 5.725 6.963 4.187 9.225 2.65 12 2.65q3.025 0 5.45 1.737 2.425 1.738 3.375 4.563.05.175-.025.288-.075.112-.275.112-.125 0-.213-.063-.087-.062-.137-.187-.9-2.6-3.15-4.175Q14.775 3.35 12 3.35q-2.625 0-4.75 1.5t-3.4 3.8H7q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm8.6 12q-3.025 0-5.45-1.737-2.425-1.738-3.375-4.563-.05-.175.025-.288.075-.112.275-.112.125 0 .213.063.087.062.137.187.9 2.6 3.15 4.175Q9.225 20.65 12 20.65q2.625 0 4.75-1.5t3.4-3.8H17q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h3.6q.325 0 .538.213.212.212.212.537V19q0 .15-.1.25t-.25.1q-.15 0-.25-.1t-.1-.25v-3.15q-1.35 2.425-3.612 3.962Q14.775 21.35 12 21.35Z"/>
    </Icon>
  );
});

IconMaterialFlipCameraAndroidW100Filled.displayName = 'AmauiIconMaterialFlipCameraAndroidW100Filled';

export default IconMaterialFlipCameraAndroidW100Filled;
