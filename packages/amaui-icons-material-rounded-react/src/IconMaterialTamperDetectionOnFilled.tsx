import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTamperDetectionOnFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TamperDetectionOnFilled'

      short_name='TamperDetectionOn'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.425 20q-.425 0-.787-.163-.363-.162-.638-.437L.675 17.075Q.4 16.8.4 16.387q0-.412.275-.687.3-.3.713-.3.412 0 .687.3l.9.9V9.25q0-.325.225-.538.225-.212.525-.212.325 0 .538.212.212.213.212.538V13h1V7.75q0-.325.225-.537Q5.925 7 6.225 7q.325 0 .538.213.212.212.212.537V13h1V8.75q0-.325.225-.538Q8.425 8 8.725 8q.325 0 .537.212.213.213.213.538V13h1V9.75q0-.325.225-.538.225-.212.525-.212.325 0 .538.212.212.213.212.538V18q0 .825-.575 1.413-.575.587-1.425.587Zm9.55-3V8q0-.825-.587-1.412Q12.8 6 11.975 6h-10V3q0-.825.587-1.413Q3.15 1 3.975 1h12q.825 0 1.413.587.587.588.587 1.413v4.5l3.15-3.15q.25-.25.55-.125.3.125.3.475v8.575q0 .35-.3.475t-.55-.125l-3.15-3.125V15q0 .825-.587 1.413Q16.8 17 15.975 17Z"/>
    </Icon>
  );
});

IconMaterialTamperDetectionOnFilled.displayName = 'AmauiIconMaterialTamperDetectionOnFilled';

export default IconMaterialTamperDetectionOnFilled;
