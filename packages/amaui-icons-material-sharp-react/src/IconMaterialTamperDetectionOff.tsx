import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTamperDetectionOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TamperDetectionOff'

      short_name='TamperDetectionOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m22 17.5-4-4v1.7l-2-2V6H8.8l-2-2H16q.825 0 1.413.588Q18 5.175 18 6v4.5l4-4ZM4 4l2 2H4v3H2V6q0-.825.588-1.412Q3.175 4 4 4Zm10 16v-2h2v-2l2 2q0 .825-.587 1.413Q16.825 20 16 20Zm6.55 3.35L.65 3.45l1.4-1.4 19.9 19.9ZM4.45 23q-.425 0-.787-.163-.363-.162-.638-.437L0 19.4l.35-.35q.225-.225.5-.338.275-.112.55-.112.3 0 .575.112.275.113.475.338l.55.55v-7.35q0-.325.225-.538.225-.212.525-.212.325 0 .537.212.213.213.213.538V16h1v-5.25q0-.325.225-.538Q5.95 10 6.25 10q.325 0 .537.212.213.213.213.538V16h1v-4.25q0-.325.225-.538Q8.45 11 8.75 11q.325 0 .538.212.212.213.212.538V16h1v-3.25q0-.325.225-.538.225-.212.525-.212.325 0 .538.212.212.213.212.538V21q0 .825-.575 1.413Q10.85 23 10 23Zm7.05-11.5Zm.9-1.9Z"/>
    </Icon>
  );
});

IconMaterialTamperDetectionOff.displayName = 'AmauiIconMaterialTamperDetectionOff';

export default IconMaterialTamperDetectionOff;
