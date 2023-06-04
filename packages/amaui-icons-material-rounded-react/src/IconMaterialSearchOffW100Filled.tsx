import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSearchOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SearchOffW100Filled'

      short_name='SearchOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7 20.2q-1.55 0-2.625-1.075T3.3 16.5q0-1.55 1.075-2.625T7 12.8q1.55 0 2.625 1.075T10.7 16.5q0 1.55-1.075 2.625T7 20.2Zm-2-1.7q.125.125.25.125t.25-.125L7 17l1.5 1.5q.1.1.238.113.137.012.262-.113t.125-.25q0-.125-.125-.25l-1.5-1.5L9 15q.1-.1.113-.238.012-.137-.113-.262t-.25-.125q-.125 0-.25.125L7 16l-1.5-1.5q-.1-.1-.237-.113-.138-.012-.263.113t-.125.25q0 .125.125.25l1.5 1.5L5 18q-.1.1-.112.238-.013.137.112.262Zm15.15 1.15-6-6q-.35.275-.825.562-.475.288-.925.438-.05-.175-.112-.338-.063-.162-.138-.287 1.35-.5 2.25-1.688.9-1.187.9-2.837 0-2-1.4-3.4t-3.4-1.4q-2 0-3.4 1.4T5.7 9.5q0 .35.063.712.062.363.137.688-.15 0-.338.062l-.337.113q-.1-.325-.163-.738Q5 9.925 5 9.5q0-2.3 1.6-3.9T10.5 4q2.3 0 3.9 1.6T16 9.5q0 1.075-.387 2.025-.388.95-.963 1.625l6 6q.125.125.125.25t-.125.25q-.125.125-.25.125t-.25-.125Z"/>
    </Icon>
  );
});

IconMaterialSearchOffW100Filled.displayName = 'AmauiIconMaterialSearchOffW100Filled';

export default IconMaterialSearchOffW100Filled;
