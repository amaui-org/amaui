import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialGasMeter = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GasMeter'

      short_name='GasMeter'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8 22q-1.65 0-2.825-1.175Q4 19.65 4 18V8q0-1.65 1.175-2.825Q6.35 4 8 4h1V3q0-.425.288-.713Q9.575 2 10 2t.713.287Q11 2.575 11 3v1h2V3q0-.425.288-.713Q13.575 2 14 2t.713.287Q15 2.575 15 3v1h1q1.65 0 2.825 1.175Q20 6.35 20 8v10q0 1.65-1.175 2.825Q17.65 22 16 22Zm0-2h8q.825 0 1.413-.587Q18 18.825 18 18V8q0-.825-.587-1.412Q16.825 6 16 6H8q-.825 0-1.412.588Q6 7.175 6 8v10q0 .825.588 1.413Q7.175 20 8 20Zm1-10h6q.425 0 .713-.288Q16 9.425 16 9t-.287-.713Q15.425 8 15 8H9q-.425 0-.712.287Q8 8.575 8 9t.288.712Q8.575 10 9 10Zm3 8q1.05 0 1.775-.712.725-.713.725-1.738 0-.65-.287-1.125-.288-.475-1.163-1.475l-.675-.775Q12.225 12 12 12t-.375.175l-.675.775q-.875 1.025-1.162 1.488Q9.5 14.9 9.5 15.55q0 1.025.725 1.738Q10.95 18 12 18ZM6 6v14V6Z"/>
    </Icon>
  );
});

IconMaterialGasMeter.displayName = 'AmauiIconMaterialGasMeter';

export default IconMaterialGasMeter;
