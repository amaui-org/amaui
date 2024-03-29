import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialJavascriptFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='JavascriptFilled'

      short_name='Javascript'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M13 15q-.425 0-.712-.288Q12 14.425 12 14v-.25q0-.325.213-.538.212-.212.537-.212.25 0 .438.137.187.138.262.363h2.05v-1H13q-.425 0-.712-.288Q12 11.925 12 11.5V10q0-.425.288-.713Q12.575 9 13 9h3q.425 0 .712.287Q17 9.575 17 10v.25q0 .325-.212.537-.213.213-.538.213-.25 0-.45-.137-.2-.138-.25-.363H13.5v1H16q.425 0 .712.287.288.288.288.713V14q0 .425-.288.712Q16.425 15 16 15Zm-5.5 0q-.625 0-1.062-.438Q6 14.125 6 13.5v-.25q0-.325.213-.538.212-.212.537-.212.325 0 .537.212.213.213.213.538v.25H9V9.75q0-.325.213-.538Q9.425 9 9.75 9q.325 0 .538.212.212.213.212.538v3.75q0 .625-.438 1.062Q9.625 15 9 15Z"/>
    </Icon>
  );
});

IconMaterialJavascriptFilled.displayName = 'AmauiIconMaterialJavascriptFilled';

export default IconMaterialJavascriptFilled;
