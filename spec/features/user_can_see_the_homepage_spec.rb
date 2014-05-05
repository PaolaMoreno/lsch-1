require 'spec_helper'

feature 'user can see the homepage' do
  scenario 'visit the homepage' do
    visit root_path

    expect(page).to have_content('Aston House College')
  end
end
