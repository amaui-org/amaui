import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFaceRetouchingOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FaceRetouchingOff'

      short_name='FaceRetouchingOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m20.35 22.1-2.2-2.2q-1.275.975-2.825 1.538-1.55.562-3.275.562-2.05 0-3.875-.788-1.825-.787-3.187-2.15-1.363-1.362-2.15-3.187Q2.05 14.05 2.05 12q0-1.725.563-3.288.562-1.562 1.537-2.837L1.95 3.7l1.4-1.4 18.4 18.4Zm.425-5.225L19.3 15.4q.35-.8.55-1.65.2-.85.2-1.75 0-.6-.075-1.163-.075-.562-.275-1.087-.525.125-1.05.188-.525.062-1.1.062-1.4 0-2.662-.363Q13.625 9.275 12.5 8.6L7.15 3.25q1.1-.6 2.325-.925Q10.7 2 12.05 2q2.075 0 3.888.787 1.812.788 3.175 2.138 1.362 1.35 2.15 3.175.787 1.825.787 3.9 0 1.325-.312 2.537-.313 1.213-.963 2.338ZM14.75 6ZM4.475 9.475q.525-.3.975-.663.45-.362.875-.787l-.75-.725q-.35.5-.625 1.038-.275.537-.475 1.137Zm6.175-5.35q1.05 1.75 2.85 2.813Q15.3 8 17.5 8q.35 0 .675-.037.325-.038.675-.088Q17.8 6.125 16 5.062 14.2 4 12 4q-.35 0-.675.037-.325.038-.675.088ZM5.4 8.375Zm3.65 5.875q-.525 0-.887-.363Q7.8 13.525 7.8 13t.363-.887q.362-.363.887-.363t.888.363q.362.362.362.887t-.362.887q-.363.363-.888.363Zm3 5.75q1.325 0 2.5-.387 1.175-.388 2.15-1.113L7.725 9.475q-.75.8-1.687 1.4-.938.6-1.988.975V12q0 3.325 2.337 5.663Q8.725 20 12.05 20Z"/>
    </Icon>
  );
});

IconMaterialFaceRetouchingOff.displayName = 'AmauiIconMaterialFaceRetouchingOff';

export default IconMaterialFaceRetouchingOff;
