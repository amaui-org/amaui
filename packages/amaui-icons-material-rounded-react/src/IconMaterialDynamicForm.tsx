import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDynamicForm = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DynamicForm'

      short_name='DynamicForm'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 11q-.825 0-1.412-.588Q2 9.825 2 9V6q0-.825.588-1.412Q3.175 4 4 4h9v7Zm0-2h7V6H4v3Zm0 11q-.825 0-1.412-.587Q2 18.825 2 18v-3q0-.825.588-1.413Q3.175 13 4 13h11v7Zm0-2h9v-3H4v3Zm13.95-.1q-.175.375-.562.3-.388-.075-.388-.5V11h-1.5q-.2 0-.35-.15-.15-.15-.15-.35v-6q0-.2.15-.35.15-.15.35-.15h5.75q.275 0 .425.212.15.213.05.463L20 9h1.225q.275 0 .425.225.15.225.025.475ZM5.5 17.25q.3 0 .525-.212.225-.213.225-.538 0-.325-.2-.537-.2-.213-.525-.213t-.55.213q-.225.212-.225.537 0 .325.213.538.212.212.537.212Zm0-9q.325 0 .537-.213.213-.212.213-.537 0-.325-.213-.537-.212-.213-.537-.213-.325 0-.537.213-.213.212-.213.537 0 .325.225.537.225.213.525.213ZM4 9V6v3Zm0 9v-3 3Z"/>
    </Icon>
  );
});

IconMaterialDynamicForm.displayName = 'AmauiIconMaterialDynamicForm';

export default IconMaterialDynamicForm;
