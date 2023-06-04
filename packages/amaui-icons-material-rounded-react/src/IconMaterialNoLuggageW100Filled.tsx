import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNoLuggageW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoLuggageW100Filled'

      short_name='NoLuggage'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m21.05 22.05-8.7-8.7v-1l5.35 5.35v.5q0 .625-.438 1.062-.437.438-1.062.438 0 .3-.2.5t-.5.2q-.3 0-.5-.2t-.2-.5H9.2q0 .3-.2.5t-.5.2q-.3 0-.5-.2t-.2-.5q-.625 0-1.062-.438Q6.3 18.825 6.3 18.2V8.65q0-.575.35-.962Q7 7.3 7.3 7.3l.275.275v1L2.5 3.5q-.1-.1-.112-.238Q2.375 3.125 2.5 3t.25-.125q.125 0 .25.125l18.55 18.55q.1.1.113.238.012.137-.113.262t-.25.125q-.125 0-.25-.125Zm-8.7-8.7-.7-.7V17q0 .15.1.25t.25.1q.15 0 .25-.1t.1-.25ZM9.1 10.1l-.7-.7V17q0 .15.1.25t.25.1q.15 0 .25-.1t.1-.25Zm1.6-2.8h2.95V4.75H10.7Zm7 7.6-2.1-2.1V10q0-.15-.1-.25t-.25-.1q-.15 0-.25.1t-.1.25v2.1L10 7.3V4.8q0-.325.213-.538.212-.212.537-.212h2.85q.325 0 .538.212.212.213.212.538v2.5h1.85q.625 0 1.062.437.438.438.438 1.063Zm-2.8.7V17q0 .15.1.25t.25.1q.15 0 .25-.1t.1-.25v-1.4Z"/>
    </Icon>
  );
});

IconMaterialNoLuggageW100Filled.displayName = 'AmauiIconMaterialNoLuggageW100Filled';

export default IconMaterialNoLuggageW100Filled;
