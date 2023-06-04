import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSportsW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SportsW100Filled'

      short_name='Sports'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.725 17.55q-1.875 0-3.212-1.338Q5.175 14.875 5.175 13q0-.375.063-.738.062-.362.137-.562-.125.05-.225.05h-.175q-.725 0-1.212-.488-.488-.487-.488-1.212t.475-1.213q.475-.487 1.2-.487.65 0 1.125.388.475.387.55.962.575-.6 1.425-.925.85-.325 1.675-.325h10.25q.325 0 .538.187.212.188.212.513t-.212.512q-.213.188-.538.188h-5.7V13q0 1.9-1.325 3.225-1.325 1.325-3.225 1.325Zm-4.75-6.5q.425 0 .713-.288.287-.287.287-.712t-.287-.713Q5.4 9.05 4.975 9.05t-.712.287q-.288.288-.288.713t.288.712q.287.288.712.288Zm4.75 3.45q.625 0 1.063-.438.437-.437.437-1.062t-.437-1.062q-.438-.438-1.063-.438t-1.063.438q-.437.437-.437 1.062t.437 1.062q.438.438 1.063.438Z"/>
    </Icon>
  );
});

IconMaterialSportsW100Filled.displayName = 'AmauiIconMaterialSportsW100Filled';

export default IconMaterialSportsW100Filled;
