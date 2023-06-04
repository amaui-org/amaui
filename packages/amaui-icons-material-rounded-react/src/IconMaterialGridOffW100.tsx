import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialGridOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GridOffW100'

      short_name='GridOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m19.4 16.9-.7-.7v-1.5h-1.5l-.7-.7h2.2v-4h-4v2.2l-.7-.7V10h-1.5l-.7-.7H14v-4h-4v2.2l-.7-.7V5.3H7.8l-.7-.7h10.8q.65 0 1.075.425.425.425.425 1.075Zm-4.7-7.6h4V6.1q0-.3-.25-.55-.25-.25-.55-.25h-3.2Zm6.45 12.85L18.4 19.4H6.1q-.65 0-1.075-.425Q4.6 18.55 4.6 17.9V5.6L1.85 2.85q-.1-.1-.112-.238-.013-.137.112-.262t.25-.125q.125 0 .25.125l19.3 19.3q.1.1.113.237.012.138-.113.263t-.25.125q-.125 0-.25-.125ZM14.7 18.7h3l-3-3ZM10 14h3l-3-3Zm0 4.7h4V15l-.3-.3H10ZM5.3 9.3h3l-3-3.05Zm0 4.7h4v-3.7L9 10H5.3Zm4 4.7v-4h-4v3.2q0 .3.25.55.25.25.55.25Z"/>
    </Icon>
  );
});

IconMaterialGridOffW100.displayName = 'AmauiIconMaterialGridOffW100';

export default IconMaterialGridOffW100;
