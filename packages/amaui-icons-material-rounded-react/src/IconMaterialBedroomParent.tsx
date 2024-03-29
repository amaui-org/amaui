import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBedroomParent = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BedroomParent'

      short_name='BedroomParent'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.75 17q.325 0 .537-.212.213-.213.213-.538v-.75h11v.75q0 .325.212.538.213.212.538.212.325 0 .538-.212.212-.213.212-.538v-3.1q0-.525-.2-.988-.2-.462-.55-.812V9q0-.825-.587-1.413Q17.075 7 16.25 7H13q-.275 0-.525.075T12 7.3q-.225-.15-.475-.225Q11.275 7 11 7H7.75q-.825 0-1.412.587Q5.75 8.175 5.75 9v2.35q-.35.35-.55.812-.2.463-.2.988v3.1q0 .325.213.538.212.212.537.212Zm7-6.5v-2h4v2Zm-5.5 0v-2h4v2ZM6.5 14v-1q0-.425.287-.713Q7.075 12 7.5 12h9q.425 0 .712.287.288.288.288.713v1ZM4 22q-.825 0-1.412-.587Q2 20.825 2 20V4q0-.825.588-1.413Q3.175 2 4 2h16q.825 0 1.413.587Q22 3.175 22 4v16q0 .825-.587 1.413Q20.825 22 20 22Zm0-2h16V4H4v16Zm0 0V4v16Z"/>
    </Icon>
  );
});

IconMaterialBedroomParent.displayName = 'AmauiIconMaterialBedroomParent';

export default IconMaterialBedroomParent;
