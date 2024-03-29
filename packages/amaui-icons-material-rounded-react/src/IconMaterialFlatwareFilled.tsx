import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFlatwareFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlatwareFilled'

      short_name='Flatware'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M13 21q-.425 0-.712-.288Q12 20.425 12 20v-9.1q-1.05-.5-1.525-1.563Q10 8.275 10 7.1q0-1.575.788-2.838Q11.575 3 13 3q1.425 0 2.213 1.262Q16 5.525 16 7.1q0 1.175-.475 2.237Q15.05 10.4 14 10.9V20q0 .425-.287.712Q13.425 21 13 21Zm5 0q-.425 0-.712-.288Q17 20.425 17 20V4.25q0-.55.375-.875.375-.325.85-.175 1.2.4 1.987 1.425Q21 5.65 21 7v5q0 .425-.288.712Q20.425 13 20 13h-1v7q0 .425-.288.712Q18.425 21 18 21ZM6 21q-.425 0-.713-.288Q5 20.425 5 20v-9q-.825 0-1.413-.588Q3 9.825 3 9V3.7q0-.3.2-.5t.5-.2q.3 0 .5.2t.2.5V7h.9V3.7q0-.3.2-.5T6 3q.3 0 .5.2t.2.5V7h.9V3.7q0-.3.2-.5t.5-.2q.3 0 .5.2t.2.5V9q0 .825-.588 1.412Q7.825 11 7 11v9q0 .425-.287.712Q6.425 21 6 21Z"/>
    </Icon>
  );
});

IconMaterialFlatwareFilled.displayName = 'AmauiIconMaterialFlatwareFilled';

export default IconMaterialFlatwareFilled;
