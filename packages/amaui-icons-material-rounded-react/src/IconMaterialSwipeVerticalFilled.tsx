import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSwipeVerticalFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwipeVerticalFilled'

      short_name='SwipeVertical'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M1.75 22q-.325 0-.538-.212Q1 21.575 1 21.25q0-.325.212-.538.213-.212.538-.212h1.275Q1.6 18.75.8 16.587 0 14.425 0 12t.8-4.588Q1.6 5.25 3.025 3.5H1.75q-.325 0-.538-.213Q1 3.075 1 2.75q0-.325.212-.538Q1.425 2 1.75 2H5q.425 0 .713.287Q6 2.575 6 3v3.25q0 .325-.213.537Q5.575 7 5.25 7q-.325 0-.537-.213Q4.5 6.575 4.5 6.25V4.1Q3.1 5.675 2.3 7.7q-.8 2.025-.8 4.3t.8 4.288Q3.1 18.3 4.5 19.9v-2.15q0-.325.213-.538Q4.925 17 5.25 17q.325 0 .537.212.213.213.213.538V21q0 .425-.287.712Q5.425 22 5 22Zm13.5-.325-5.2-2.15q-.35-.15-.537-.537-.188-.388-.113-.763.05-.3.288-.513.237-.212.612-.287l3.275-.65L9.2 6.95q-.25-.575-.037-1.15.212-.575.787-.825.575-.25 1.15-.038.575.213.825.788l2.45 5.5.825-.375q.2-.075.45-.138.25-.062.45-.037l4.575.2q.65.05 1.15.45.5.4.675 1l1.25 4.325q.2.725-.1 1.4-.3.675-1 .975L17 21.55q-.425.2-.9.238-.475.037-.85-.113Z"/>
    </Icon>
  );
});

IconMaterialSwipeVerticalFilled.displayName = 'AmauiIconMaterialSwipeVerticalFilled';

export default IconMaterialSwipeVerticalFilled;
