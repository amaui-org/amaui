import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHdrAuto = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HdrAuto'

      short_name='HdrAuto'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.175 17q.25 0 .5-.163.25-.162.325-.387l.8-2.25h4.4l.8 2.25q.075.225.312.387.238.163.513.163.525 0 .775-.35t.05-.85l-3.3-8.875q-.15-.375-.538-.65Q12.425 6 12 6q-.425 0-.812.275-.388.275-.538.65L7.35 15.8q-.2.5.05.85t.775.35Zm2.175-4.4 1.6-4.55h.1l1.6 4.55ZM12 22q-2.075 0-3.9-.788-1.825-.787-3.175-2.137-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175 1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138 1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175-1.35 1.35-3.175 2.137Q14.075 22 12 22Zm0-10Zm0 8q3.325 0 5.663-2.337Q20 15.325 20 12t-2.337-5.663Q15.325 4 12 4T6.338 6.337Q4 8.675 4 12t2.338 5.663Q8.675 20 12 20Z"/>
    </Icon>
  );
});

IconMaterialHdrAuto.displayName = 'AmauiIconMaterialHdrAuto';

export default IconMaterialHdrAuto;
