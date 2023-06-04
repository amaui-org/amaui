import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBathPrivateW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BathPrivateW100'

      short_name='BathPrivate'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M753 543q-20 0-34-13.5T705 496q0-20 14-33.5t34-13.5q20 0 33.5 13.5T800 496q0 20-13.5 33.5T753 543Zm-546 0q-20 0-33.5-13.5T160 496q0-20 13.5-33.5T207 449q20 0 34 13.5t14 33.5q0 20-14 33.5T207 543Zm166-27q6-29-1-54t-30-52q-27-32-36.5-65t-3.5-75h27q-5 39 2.5 67.5T361 392q27 33 36 61.5t3 62.5h-27Zm110 0q6-30-1-55t-30-52q-26-32-35.5-64.5T413 270h27q-5 39 2.5 67.5T472 392q27 33 36 61.5t3 62.5h-28Zm111 0q6-30-1-55t-30-52q-26-32-35.5-64.5T524 270h27q-5 39 2.5 67.5T583 392q27 33 36 61.5t3 62.5h-28ZM132 924V668h28v-25q0-24 17-41t41-17q15 0 28 7t23 18l50 58h322l50-58q10-11 23-18t28-7q24 0 41 17t17 41v25h28v256H132Zm28-116h640V696H160v112Zm0 88h640v-60H160v60Zm320-88Zm0 28Zm0 0v-28 28Z"/>
    </Icon>
  );
});

IconMaterialBathPrivateW100.displayName = 'AmauiIconMaterialBathPrivateW100';

export default IconMaterialBathPrivateW100;
