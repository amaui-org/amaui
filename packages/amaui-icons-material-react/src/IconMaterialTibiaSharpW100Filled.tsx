import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTibiaSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TibiaSharpW100Filled'
      short_name='Tibia'

      {...props}
    >
      <path d="m10.3 8.65-2.5-2.5q-.25-.25-.375-.538-.125-.287-.125-.637 0-.7.475-1.188Q8.25 3.3 8.95 3.3h6.1q.675 0 1.15.487.475.488.475 1.163 0 .35-.137.663-.138.312-.388.587L13.7 8.625v6.625l2.5 2.475q.225.25.362.563.138.312.138.662 0 .725-.5 1.225-.5.5-1.225.5-.35 0-.65-.137-.3-.138-.55-.363-.35-.35-.812-.55-.463-.2-.963-.2-.5 0-.95.2-.45.2-.8.55-.25.225-.562.363-.313.137-.663.137-.725 0-1.213-.5-.487-.5-.512-1.225 0-.35.125-.662.125-.313.375-.538l2.5-2.475Z"/>
    </Icon>
  );
});

IconMaterialTibiaSharpW100Filled.displayName = 'AmauiIconMaterialTibiaSharpW100Filled';

export default IconMaterialTibiaSharpW100Filled;
