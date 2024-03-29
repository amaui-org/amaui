import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPsychologyAltFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PsychologyAltFilled'

      short_name='PsychologyAlt'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12.525 14q.325 0 .537-.213.213-.212.213-.537 0-.325-.213-.538-.212-.212-.537-.212-.325 0-.537.212-.213.213-.213.538 0 .325.213.537.212.213.537.213ZM12 11.75h1.05q0-.4.05-.588.05-.187.225-.387.125-.15.263-.287.137-.138.312-.338.35-.375.487-.688.138-.312.138-.662 0-.8-.537-1.3-.538-.5-1.413-.5-.725 0-1.287.387-.563.388-.788 1.063l.975.4q.125-.425.413-.65.287-.225.662-.225.4 0 .663.25.262.25.262.625 0 .225-.125.437-.125.213-.375.463-.175.175-.35.325-.175.15-.325.35-.225.325-.262.65Q12 11.4 12 11.75ZM9 21v-3H6v-5H4.5q-.25 0-.438-.262-.187-.263.038-.538l1.925-2.55Q6.15 7 8.1 5q1.95-2 4.9-2 2.9 0 4.95 2.05Q20 7.1 20 10q0 2.125-1.112 3.8-1.113 1.675-2.888 2.55V21Z"/>
    </Icon>
  );
});

IconMaterialPsychologyAltFilled.displayName = 'AmauiIconMaterialPsychologyAltFilled';

export default IconMaterialPsychologyAltFilled;
