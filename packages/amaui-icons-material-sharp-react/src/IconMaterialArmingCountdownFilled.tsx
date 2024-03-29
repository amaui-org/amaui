import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialArmingCountdownFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArmingCountdownFilled'

      short_name='ArmingCountdown'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 16q1.875 0 3.188-1.312Q16.5 13.375 16.5 11.5q0-1.875-1.312-3.188Q13.875 7 12 7v1.5q1.25 0 2.125.875T15 11.5q0 1.25-.875 2.125T12 14.5q-.825 0-1.537-.425-.713-.425-1.113-1.15l-1.3.725q.6 1.1 1.65 1.725Q10.75 16 12 16Zm-1.75-7.125q.325 0 .538-.213Q11 8.45 11 8.125q0-.325-.212-.537-.213-.213-.538-.213-.325 0-.537.213-.213.212-.213.537 0 .325.213.537.212.213.537.213ZM8.8 10.25q.325 0 .538-.213.212-.212.212-.537 0-.325-.212-.538-.213-.212-.538-.212-.325 0-.538.212-.212.213-.212.538 0 .325.212.537.213.213.538.213Zm-.55 2.1q.325 0 .538-.213Q9 11.925 9 11.6q0-.325-.212-.538-.213-.212-.538-.212-.325 0-.537.212-.213.213-.213.538 0 .325.213.537.212.213.537.213ZM12 22q-3.475-.875-5.737-3.988Q4 14.9 4 11.1V5l8-3 8 3v6.1q0 3.8-2.262 6.912Q15.475 21.125 12 22Z"/>
    </Icon>
  );
});

IconMaterialArmingCountdownFilled.displayName = 'AmauiIconMaterialArmingCountdownFilled';

export default IconMaterialArmingCountdownFilled;
