import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVibrationFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VibrationFilled'

      short_name='Vibration'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M1 15q-.425 0-.712-.288Q0 14.425 0 14v-4q0-.425.288-.713Q.575 9 1 9t.712.287Q2 9.575 2 10v4q0 .425-.288.712Q1.425 15 1 15Zm3 2q-.425 0-.712-.288Q3 16.425 3 16V8q0-.425.288-.713Q3.575 7 4 7t.713.287Q5 7.575 5 8v8q0 .425-.287.712Q4.425 17 4 17Zm19-2q-.425 0-.712-.288Q22 14.425 22 14v-4q0-.425.288-.713Q22.575 9 23 9t.712.287Q24 9.575 24 10v4q0 .425-.288.712Q23.425 15 23 15Zm-3 2q-.425 0-.712-.288Q19 16.425 19 16V8q0-.425.288-.713Q19.575 7 20 7t.712.287Q21 7.575 21 8v8q0 .425-.288.712Q20.425 17 20 17ZM7.5 21q-.65 0-1.075-.425Q6 20.15 6 19.5v-15q0-.65.425-1.075Q6.85 3 7.5 3h9q.65 0 1.075.425Q18 3.85 18 4.5v15q0 .65-.425 1.075Q17.15 21 16.5 21Z"/>
    </Icon>
  );
});

IconMaterialVibrationFilled.displayName = 'AmauiIconMaterialVibrationFilled';

export default IconMaterialVibrationFilled;
